// import React, { useEffect } from "react";
import { AnimatedGroup } from "../../components/ui/animated-group";
import { InView } from "../../components/ui/in-view";
import { Tilt } from "../../components/ui/tilt";

// https://motion-primitives.com/docs
// https://dev.to/kohtet_gintoki/15-re-usable-ui-component-libraries-with-framer-motion-25p9

const Advertise = () => {
  return (
    <div className="h-fit py-12 pt-12 bg-slate-950 ">
      <div className="text-slate-100 flex h-full justify-center items-center text-4xl md:text-5xl lg:text-7xl font-bold tracking-wide mb-8">
        Advertise Features
      </div>
      <InView
        variants={{
          hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        viewOptions={{ margin: "0px 0px -200px 0px" }}
        transition={{ ease: "easeInOut", staggerChildren: 0.5 }}
      >
        <AnimatedGroup
          className="grid grid-cols-1 gap-4 py-4 px-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          variants={{
            container: {
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.05,
                },
              },
            },
            item: {
              hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: {
                  duration: 1.2,
                  type: "spring",
                  bounce: 0.3,
                },
              },
            },
          }}
        >
          <Tilt rotationFactor={8} isRevese>
            <div
              style={{
                borderRadius: "12px",
              }}
              className="flex max-w-full sm:max-w-[330px] flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900"
            >
              <img
                src="https://images.beta.cosmos.so/f7fcb95d-981b-4cb3-897f-e35f6c20e830?format=jpeg"
                alt="Ghost in the shell - Kôkaku kidôtai"
                className="h-32 sm:h-40 md:h-48 w-full object-cover"
              />
              <div className="p-2">
                <h1 className="font-mono leading-snug text-zinc-950 dark:text-zinc-50">
                  Ghost in the Shell
                </h1>
                <p className="text-zinc-700 dark:text-zinc-400">
                  Kôkaku kidôtai
                </p>
              </div>
            </div>
          </Tilt>
          <Tilt rotationFactor={8} isRevese>
            <div
              style={{
                borderRadius: "12px",
              }}
              className="flex max-w-full sm:max-w-[330px] flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900"
            >
              <img
                src="https://images.beta.cosmos.so/f7fcb95d-981b-4cb3-897f-e35f6c20e830?format=jpeg"
                alt="Ghost in the shell - Kôkaku kidôtai"
                className="h-32 sm:h-40 md:h-48 w-full object-cover"
              />
              <div className="p-2">
                <h1 className="font-mono leading-snug text-zinc-950 dark:text-zinc-50">
                  Ghost in the Shell
                </h1>
                <p className="text-zinc-700 dark:text-zinc-400">
                  Kôkaku kidôtai
                </p>
              </div>
            </div>
          </Tilt>
          <Tilt rotationFactor={8} isRevese>
            <div
              style={{
                borderRadius: "12px",
              }}
              className="flex max-w-full sm:max-w-[330px] flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900"
            >
              <img
                src="https://images.beta.cosmos.so/f7fcb95d-981b-4cb3-897f-e35f6c20e830?format=jpeg"
                alt="Ghost in the shell - Kôkaku kidôtai"
                className="h-32 sm:h-40 md:h-48 w-full object-cover"
              />
              <div className="p-2">
                <h1 className="font-mono leading-snug text-zinc-950 dark:text-zinc-50">
                  Ghost in the Shell
                </h1>
                <p className="text-zinc-700 dark:text-zinc-400">
                  Kôkaku kidôtai
                </p>
              </div>
            </div>
          </Tilt>
          <Tilt rotationFactor={8} isRevese>
            <div
              style={{
                borderRadius: "12px",
              }}
              className="flex max-w-full sm:max-w-[330px] flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900"
            >
              <img
                src="https://images.beta.cosmos.so/f7fcb95d-981b-4cb3-897f-e35f6c20e830?format=jpeg"
                alt="Ghost in the shell - Kôkaku kidôtai"
                className="h-32 sm:h-40 md:h-48 w-full object-cover"
              />
              <div className="p-2">
                <h1 className="font-mono leading-snug text-zinc-950 dark:text-zinc-50">
                  Ghost in the Shell
                </h1>
                <p className="text-zinc-700 dark:text-zinc-400">
                  Kôkaku kidôtai
                </p>
              </div>
            </div>
          </Tilt>{" "}
        </AnimatedGroup>
      </InView>
    </div>
  );
};

export default Advertise;
