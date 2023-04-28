import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerScaleOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerScaleOffIcon = React.forwardRef<SVGSVGElement, TablerScaleOffIconProps>(function TablerScaleOffIcon(
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
			<path d="M7 20h10" />
			<path d="M9.452 5.425l2.548 -.425l6 1" />
			<path d="M12 3v5m0 4v8" />
			<path d="M9 12l-3 -6l-3 6a3 3 0 0 0 6 0" />
			<path d="M18.873 14.871a3 3 0 0 0 2.127 -2.871l-3 -6l-2.677 5.355" />
			<path d="M3 3l18 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerScaleOffIcon.displayName = "TablerScaleOffIcon";
}
