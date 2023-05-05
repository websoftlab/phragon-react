import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSpeakerIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSpeakerIcon = React.forwardRef<SVGSVGElement, TablerSpeakerIconProps>(function TablerSpeakerIcon(
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
			<path d="M6 2 H18 A2 2 0 0 1 20 4 V20 A2 2 0 0 1 18 22 H6 A2 2 0 0 1 4 20 V4 A2 2 0 0 1 6 2 z" />
			<path d="M16 14 A4 4 0 0 1 12 18 A4 4 0 0 1 8 14 A4 4 0 0 1 16 14" />
			<path d="M12 6 L12.01 6" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerSpeakerIcon.displayName = "TablerSpeakerIcon";
}
