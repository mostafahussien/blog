import { memo } from "react";

import { setConfiguration } from "react-grid-system";

const GridConfiguration = () => {
  setConfiguration({
    gutterWidth: 24,
    // container max width for sm, md, lg and xl.
    containerWidths: [540, 740, 960, 1176],
    // Disabling the xxl screen sizes
    maxScreenClass: "xl",
  });
  return null;
};

export default memo(GridConfiguration);
