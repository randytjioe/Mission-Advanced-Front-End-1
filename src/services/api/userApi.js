export const USER_ROLES = {
    STUDENT: 'student',
    INSTRUCTOR: 'instructor',
    ADMIN: 'admin',
  };
  
  export const getCurrentUser = async () => {
    // Implement API call to get current user
    // This is a mock implementation
    return {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      role: USER_ROLES.STUDENT,
    };
  };
  