import type { ServiceItem } from "@/types/service";
import { residentialDrainCleaning } from "./all-services-data/residential-drain-cleaning";
import { residentialDrainRepairs } from "./all-services-data/residential-drain-repairs";
import { commercialDrainRepairs } from "./all-services-data/commercial-drain-repairs";
import { commercialDrainCleaning } from "./all-services-data/commercial-drain-cleaning";
import { faucetLeakRepairs } from "./all-services-data/faucet-leak-repairs";
import { sewerAndDrainCleaning } from "./all-services-data/sewer-and-drain-cleaning";
import { toiletClogs } from "./all-services-data/toilet-clogs";
import { tubClogs } from "./all-services-data/tub-clogs";
import { sewerAndDrainVideoInspections } from "./all-services-data/sewer-and-drain-video-inspections";
import { sinkClogs } from "./all-services-data/sink-clogs";
import { sewerAndDrainRepairs } from "./all-services-data/sewer-and-drain-repairs";
import { hydroJetting } from "./all-services-data/hydro-jetting";
import { flushValveLeakRepairs } from "./all-services-data/flush-valve-leak-repairs";
import { sumpPumpRepairsOrReplacement } from "./all-services-data/sump-pump-repairs-or-replacement";
import { sewageEjectorPumpsRepairsOrReplacement } from "./all-services-data/sewage-ejector-pumps-repairs-or-replacement";

export const allServicesData: ServiceItem[] = [
  residentialDrainCleaning,
  residentialDrainRepairs,
  commercialDrainRepairs,
  commercialDrainCleaning,
  faucetLeakRepairs,
  sewerAndDrainCleaning,
  toiletClogs,
  tubClogs,
  sewerAndDrainVideoInspections,
  sinkClogs,
  sewerAndDrainRepairs,
  hydroJetting,
  flushValveLeakRepairs,
  sumpPumpRepairsOrReplacement,
  sewageEjectorPumpsRepairsOrReplacement,
];