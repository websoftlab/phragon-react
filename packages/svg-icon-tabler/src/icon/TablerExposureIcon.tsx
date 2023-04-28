import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerExposureIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerExposureIcon = React.forwardRef<SVGSVGElement, TablerExposureIconProps>(function TablerExposureIcon(
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
			<path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
			<path d="M4.6 19.4l14.8 -14.8" />
			<path d="M7 9h4m-2 -2v4" />
			<path d="M13 16l4 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerExposureIcon.displayName = "TablerExposureIcon";
}
