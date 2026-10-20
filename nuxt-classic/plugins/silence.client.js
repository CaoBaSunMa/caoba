export default defineNuxtPlugin(() => {
    const originalConsoleError = console.error;
  
    console.error = (...args) => {
      // List of error messages to silence
      const messagesToSilence = [
        'Hydration completed but contains mismatches',
      ];
  
      if (args.some(arg => messagesToSilence.some(msg => arg.includes(msg)))) {
        return; // Ignore these errors
      }
  
      // Pass through other errors
      originalConsoleError(...args);
    };
  });
  