import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I upload an image to draw on?",
      answer: "To upload an image, simply click the Upload Image button in the toolbar, and select the image you want to work with. Once uploaded, the image will appear as the background on the canvas, allowing you to draw over it using the brush tool.",
    },
    {
      question: "Can I change the brush size and color?",
      answer: "Yes! You can adjust the brush size by using the brush size slider, which ranges from 1 to 20 pixels. You can also change the brush color by clicking on the color input field next to Brush Color. Choose any color that fits your design preferences.",
    },
    {
      question: "How do I adjust the opacity of my brush?",
      answer: "The opacity of the brush can be adjusted using the opacity slider in the toolbar. The slider ranges from 0 (completely transparent) to 1 (fully opaque). Adjust the slider to control the transparency of the brush strokes while drawing on the canvas.",
    },
    {
      question: "How can I save the image?",
      answer: "After drawing on the image, you can save the image by clicking the Save Image button in the toolbar. The image, including your drawing, will be saved as a PNG file, and a download link will automatically appear in your browser. Simply click the link to save the image to your device.",
    },
  ];

  return (
    <div className="bg-[#F9F7EE] min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-16">
        <h1 className="text-6xl md:text-8xl font-bold text-center mb-16 text-black">
          FAQ
        </h1>
        
        <div className="max-w-3xl sm:max-w-4xl lg:max-w-5xl mx-auto">
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-lg overflow-hidden">
                <button
                  className="w-full text-left px-4 sm:px-6 py-3 sm:py-4 focus:outline-none"
                  onClick={() => handleToggle(index)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-black">{faq.question}</h3>
                    <ChevronDown
                      className={`w-5 h-5 text-black transform transition-transform duration-200 ${
                        activeIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>
                {activeIndex === index && (
                  <div className="px-4 sm:px-6 py-2 sm:py-3 pb-3 sm:pb-4">
                    <p className="text-black">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;

