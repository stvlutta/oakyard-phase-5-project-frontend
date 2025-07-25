
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useAuth } from '../contexts/AuthContext';
import { setCurrentSpace } from '../store/slices/spacesSlice';
import { addBooking } from '../store/slices/bookingsSlice';
import { mockSpaces } from '../data/mockData';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Calendar as CalendarIcon, Clock, CreditCard, MapPin, Users } from 'lucide-react';
import { toast } from 'sonner';
import Calendar from 'react-calendar';
import TimePicker from 'react-time-picker';
import 'react-calendar/dist/Calendar.css';
import 'react-time-picker/dist/TimePicker.css';

const BookingPage = () => {
  const { spaceId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentSpace = useSelector((state) => state.spaces.currentSpace);
  const { user, isAuthenticated } = useAuth();

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [startTime, setStartTime] = useState('09:00');
  const [endTime, setEndTime] = useState('10:00');
  const [totalHours, setTotalHours] = useState(1);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    if (spaceId) {
      const space = mockSpaces.find(s => s.id === spaceId);
      dispatch(setCurrentSpace(space || null));
    }
  }, [spaceId, dispatch, isAuthenticated, navigate]);

  useEffect(() => {
    if (startTime && endTime && currentSpace) {
      const start = new Date(`2000-01-01T${startTime}:00`);
      const end = new Date(`2000-01-01T${endTime}:00`);
      
      if (end > start) {
        const hours = (end.getTime() - start.getTime()) / (1000 * 60 * 60);
        setTotalHours(hours);
        setTotalCost(hours * currentSpace.hourlyRate);
      } else {
        setTotalHours(0);
        setTotalCost(0);
      }
    }
  }, [startTime, endTime, currentSpace]);

  const handleBooking = () => {
    if (!currentSpace || !user) return;

    if (totalHours <= 0) {
      toast.error("End time must be after start time.");
      return;
    }

    const startDateTime = new Date(selectedDate);
    startDateTime.setHours(parseInt(startTime.split(':')[0]), parseInt(startTime.split(':')[1]));
    
    const endDateTime = new Date(selectedDate);
    endDateTime.setHours(parseInt(endTime.split(':')[0]), parseInt(endTime.split(':')[1]));

    const newBooking = {
      id: `booking-${Date.now()}`,
      spaceId: currentSpace.id,
      spaceName: currentSpace.title,
      userId: user.id,
      userName: user.name,
      startTime: startDateTime.toISOString(),
      endTime: endDateTime.toISOString(),
      totalHours,
      totalCost,
      status: 'pending',
      paymentStatus: 'pending',
      invoice: {
        id: `INV-${Date.now()}`,
        subtotal: totalCost,
        tax: totalCost * 0.1,
        total: totalCost * 1.1,
        issuedAt: new Date().toISOString(),
      },
      createdAt: new Date().toISOString(),
    };

    dispatch(addBooking(newBooking));

    toast.success("Booking created! Your booking has been submitted for confirmation.");

    navigate('/dashboard');
  };

  if (!currentSpace) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Space not found</h1>
          <Button onClick={() => navigate('/')}>Back to Spaces</Button>
        </div>
      </div>
    );
  }

  const tax = totalCost * 0.1;
  const finalTotal = totalCost + tax;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Book Your Space</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Booking Form */}
          <div className="space-y-6">
            {/* Space Info */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <img 
                    src={currentSpace.images[0]} 
                    alt={currentSpace.title}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{currentSpace.title}</h3>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-1">
                      <MapPin className="h-4 w-4" />
                      <span>{currentSpace.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-1">
                      <Users className="h-4 w-4" />
                      <span>Up to {currentSpace.capacity} people</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-primary">
                      ${currentSpace.hourlyRate}/hr
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Date Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CalendarIcon className="h-5 w-5" />
                  <span>Select Date</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center">
                  <Calendar
                    onChange={(date) => setSelectedDate(date)}
                    value={selectedDate}
                    minDate={new Date()}
                    className="react-calendar"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Time Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>Select Time</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="start-time">Start Time</Label>
                    <TimePicker
                      value={startTime}
                      onChange={(time) => setStartTime(time || '09:00')}
                      format="HH:mm"
                      className="w-full mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="end-time">End Time</Label>
                    <TimePicker
                      value={endTime}
                      onChange={(time) => setEndTime(time || '10:00')}
                      format="HH:mm"
                      className="w-full mt-1"
                    />
                  </div>
                </div>
                
                {totalHours > 0 && (
                  <div className="p-3 bg-muted rounded-lg">
                    <p className="text-sm font-medium">
                      Duration: {totalHours} hour{totalHours !== 1 ? 's' : ''}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Booking Summary */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CreditCard className="h-5 w-5" />
                  <span>Booking Summary</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Date:</span>
                    <span className="font-medium">
                      {selectedDate.toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Time:</span>
                    <span className="font-medium">
                      {startTime} - {endTime}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span className="font-medium">
                      {totalHours} hour{totalHours !== 1 ? 's' : ''}
                    </span>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>${totalCost.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax (10%):</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total:</span>
                    <span>${finalTotal.toFixed(2)}</span>
                  </div>
                </div>

                <Separator />

                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={handleBooking}
                  disabled={totalHours <= 0}
                >
                  Confirm Booking
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By clicking "Confirm Booking", you agree to our terms of service and 
                  cancellation policy.
                </p>
              </CardContent>
            </Card>

            {/* Payment Note */}
            <Card>
              <CardContent className="p-4">
                <div className="text-center text-sm text-muted-foreground">
                  <p className="font-medium mb-2">💳 Secure Payment</p>
                  <p>
                    This is a demo booking. In a real application, payment would be 
                    processed securely through Stripe or similar payment gateway.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
