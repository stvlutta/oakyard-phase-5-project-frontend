export const spacesApi = {
  // Get all spaces
  async getSpaces() {
    try {
      // Mock data for now since we don't have Supabase integration
      const mockSpaces = [
        {
          id: 1,
          title: "Creative Studio",
          description: "A bright and inspiring creative studio perfect for meetings and workshops",
          location: "Downtown",
          hourlyRate: 50,
          capacity: 10,
          category: "Meeting Room",
          amenities: ["WiFi", "Projector", "Whiteboard"],
          images: ["/placeholder.svg"],
          ownerId: 1,
          ownerName: "John Doe",
          rating: 4.5,
          reviews: 12,
          availability: {}
        },
        {
          id: 2,
          title: "Event Hall",
          description: "Large event hall suitable for conferences and presentations",
          location: "Business District",
          hourlyRate: 100,
          capacity: 50,
          category: "Event Space",
          amenities: ["Sound System", "Stage", "Parking"],
          images: ["/placeholder.svg"],
          ownerId: 2,
          ownerName: "Jane Smith",
          rating: 4.8,
          reviews: 25,
          availability: {}
        }
      ];
      
      return mockSpaces;
    } catch (error) {
      console.error('Error fetching spaces:', error);
      return [];
    }
  },

  // Get single space
  async getSpace(id) {
    try {
      const spaces = await this.getSpaces();
      const space = spaces.find(s => s.id === parseInt(id));
      if (!space) {
        throw new Error('Space not found');
      }
      return space;
    } catch (error) {
      console.error('Error fetching space:', error);
      throw error;
    }
  },

  // Create new space
  async createSpace(spaceData) {
    try {
      console.log('Creating space with data:', spaceData);
      
      // Mock creation - in real app this would send to backend
      const newSpace = {
        id: Date.now(), // Mock ID
        ...spaceData,
        ownerId: 1,
        ownerName: 'Admin User',
        rating: 5.0,
        reviews: 0,
        availability: {}
      };

      console.log('Space created successfully:', newSpace);
      return newSpace;
    } catch (error) {
      console.error('Error creating space:', error);
      throw new Error(`Failed to create space: ${error.message}`);
    }
  },

  // Update space
  async updateSpace(id, spaceData) {
    try {
      console.log('Updating space:', id, spaceData);
      return { id, ...spaceData };
    } catch (error) {
      console.error('Error updating space:', error);
      throw error;
    }
  },

  // Delete space
  async deleteSpace(id) {
    try {
      console.log('Deleting space:', id);
      return { success: true };
    } catch (error) {
      console.error('Error deleting space:', error);
      throw error;
    }
  }
};