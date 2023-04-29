import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherPlayCircleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherPlayCircleIcon = React.forwardRef<SVGSVGElement, FeatherPlayCircleIconProps>(
	function FeatherPlayCircleIcon(props, ref) {
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
				<circle cx="12" cy="12" r="10" />
				<polygon points="10 8 16 12 10 16 10 8" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherPlayCircleIcon.displayName = "FeatherPlayCircleIcon";
}
