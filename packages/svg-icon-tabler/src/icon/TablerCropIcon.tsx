import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCropIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCropIcon = React.forwardRef<SVGSVGElement, TablerCropIconProps>(function TablerCropIcon(props, ref) {
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
			<path d="M8 5v10a1 1 0 0 0 1 1h10" />
			<path d="M5 8h10a1 1 0 0 1 1 1v10" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCropIcon.displayName = "TablerCropIcon";
}
