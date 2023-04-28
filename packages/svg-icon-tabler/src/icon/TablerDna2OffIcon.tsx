import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDna2OffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDna2OffIcon = React.forwardRef<SVGSVGElement, TablerDna2OffIconProps>(function TablerDna2OffIcon(
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
			<path d="M17 3v1c-.007 2.46 -.91 4.554 -2.705 6.281m-2.295 1.719c-3.328 1.99 -5 4.662 -5.008 8.014v1" />
			<path d="M17 21.014v-1c0 -1.44 -.315 -2.755 -.932 -3.944m-4.068 -4.07c-1.903 -1.138 -3.263 -2.485 -4.082 -4.068" />
			<path d="M8 4h9" />
			<path d="M7 20h10" />
			<path d="M12 8h4" />
			<path d="M8 16h8" />
			<path d="M3 3l18 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerDna2OffIcon.displayName = "TablerDna2OffIcon";
}
