import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherVolumeXIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherVolumeXIcon = React.forwardRef<SVGSVGElement, FeatherVolumeXIconProps>(function FeatherVolumeXIcon(
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
			<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
			<line x1="23" y1="9" x2="17" y2="15" />
			<line x1="17" y1="9" x2="23" y2="15" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	FeatherVolumeXIcon.displayName = "FeatherVolumeXIcon";
}
