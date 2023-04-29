import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherPauseCircleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherPauseCircleIcon = React.forwardRef<SVGSVGElement, FeatherPauseCircleIconProps>(
	function FeatherPauseCircleIcon(props, ref) {
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
				<line x1="10" y1="15" x2="10" y2="9" />
				<line x1="14" y1="15" x2="14" y2="9" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherPauseCircleIcon.displayName = "FeatherPauseCircleIcon";
}
