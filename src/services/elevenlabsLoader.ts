// ElevenLabs ConvAI Script Loader Service
// Prevents duplicate script loading and custom element definition errors

class ElevenLabsLoader {
  private static instance: ElevenLabsLoader;
  private isLoaded = false;
  private isLoading = false;
  private loadPromise: Promise<void> | null = null;

  private constructor() {}

  static getInstance(): ElevenLabsLoader {
    if (!ElevenLabsLoader.instance) {
      ElevenLabsLoader.instance = new ElevenLabsLoader();
    }
    return ElevenLabsLoader.instance;
  }

  async loadScript(): Promise<void> {
    // If already loaded, return immediately
    if (this.isLoaded) {
      return Promise.resolve();
    }

    // If currently loading, return the existing promise
    if (this.isLoading && this.loadPromise) {
      return this.loadPromise;
    }

    // Check if script is already in DOM
    const scriptSrc = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
    const existingScript = document.querySelector(`script[src="${scriptSrc}"]`);
    
    if (existingScript) {
      this.isLoaded = true;
      return Promise.resolve();
    }

    // Check if custom elements are already defined
    const isConvAIElementDefined = customElements.get('elevenlabs-convai');
    if (isConvAIElementDefined) {
      this.isLoaded = true;
      return Promise.resolve();
    }

    // Start loading
    this.isLoading = true;
    this.loadPromise = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = scriptSrc;
      script.async = true;
      script.type = 'text/javascript';
      
      script.onload = () => {
        console.log('ElevenLabs ConvAI script loaded successfully');
        this.isLoaded = true;
        this.isLoading = false;
        resolve();
      };
      
      script.onerror = (error) => {
        console.error('Failed to load ElevenLabs ConvAI script:', error);
        this.isLoading = false;
        reject(new Error('Failed to load ElevenLabs ConvAI script'));
      };
      
      document.head.appendChild(script);
    });

    return this.loadPromise;
  }

  isScriptLoaded(): boolean {
    return this.isLoaded || !!customElements.get('elevenlabs-convai');
  }
}

export const elevenLabsLoader = ElevenLabsLoader.getInstance(); 