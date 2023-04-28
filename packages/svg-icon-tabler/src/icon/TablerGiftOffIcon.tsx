import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerGiftOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerGiftOffIcon = React.forwardRef<SVGSVGElement, TablerGiftOffIconProps>(function TablerGiftOffIcon(
	props,
	ref
) {
	const { children, ...rest } = props;
	return (
		<SvgIcon
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			{...rest}
			ref={ref}
			size={24}
			icon={undefined}
			fill="none"
		>
			<path d="M12 8h8a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4m-4 0h-8a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1h4" />
			<path d="M12 12v9" />
			<path d="M19 12v3m0 4a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-7" />
			<path d="M7.5 8a2.5 2.5 0 0 1 -2.457 -2.963m2.023 -2c.14 -.023 .286 -.037 .434 -.037c1.974 -.034 3.76 1.95 4.5 5c.74 -3.05 2.526 -5.034 4.5 -5a2.5 2.5 0 1 1 0 5" />
			<path d="M3 3l18 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerGiftOffIcon.displayName = "TablerGiftOffIcon";
}
