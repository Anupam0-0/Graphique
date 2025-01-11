// import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";

// const Tertiary = () => {
//   return (
//     <div className='h-screen bg-slate-200 pt-32  '>

//         

//     </div>
//   )
// }

// export default Tertiary

export default function ImageCards() {
  return (
    <div className="h-[110vh] bg-slate-200 pt-52 border-b-4 border-slate-950  ">
      <div className='text-slate-900 flex justify-center items-center text-7xl font-bold tracking-normal mb-8'>
             More Features
        </div>
      <div className="container mx-auto py-12">
        
        <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
          {/* Wireframe Card */}
          <Card className="w-full md:w-1/3">
            <CardHeader>
              <CardTitle>Layout Design</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ih5jyhia4kgHIBc9bBMY0wSkRRJbWI.png"
                  alt="Wireframe layout"
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="mt-4 text-muted-foreground">
                Create and preview wireframe layouts instantly
              </p>
            </CardContent>
          </Card>

          {/* Image Filters Card */}
          <Card className="w-full md:w-1/3">
            <CardHeader>
              <CardTitle>Image Filters</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-11%20111446-T8xFYFDE2YWBD5cyUYYu8hwxNv7lyN.png"
                  alt="Image filters interface"
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="mt-4 text-muted-foreground">
                Adjust brightness, contrast, saturation, and blur
              </p>
            </CardContent>
          </Card>

          {/* Drawing Tools Card */}
          <Card className="w-full md:w-1/3">
            <CardHeader>
              <CardTitle>Drawing Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-11%20111220-jh2dc8zjFOa5ePlGspAiBeTyLkeiQ1.png"
                  alt="Drawing tools example"
                  className="object-contain w-full h-full"
                />
              </div>
              <p className="mt-4 text-muted-foreground">
                Add custom drawings and annotations
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      
    </div>
  );
}
