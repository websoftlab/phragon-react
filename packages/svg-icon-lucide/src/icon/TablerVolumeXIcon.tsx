import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerVolumeXIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerVolumeXIcon = React.forwardRef<SVGSVGElement, TablerVolumeXIconProps>(function TablerVolumeXIcon(
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
			<path d="M11 5 L6 9 L2 9 L2 15 L6 15 L11 19 L11 5Z" />
			<path d="M22 9 L16 15" />
			<path d="M16 9 L22 15" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerVolumeXIcon.displayName = "TablerVolumeXIcon";
}
