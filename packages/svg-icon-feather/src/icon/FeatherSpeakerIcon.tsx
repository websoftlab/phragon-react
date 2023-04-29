import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherSpeakerIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherSpeakerIcon = React.forwardRef<SVGSVGElement, FeatherSpeakerIconProps>(function FeatherSpeakerIcon(
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
			<rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
			<circle cx="12" cy="14" r="4" />
			<line x1="12" y1="6" x2="12.01" y2="6" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	FeatherSpeakerIcon.displayName = "FeatherSpeakerIcon";
}
