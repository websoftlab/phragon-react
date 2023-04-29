import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherStopCircleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherStopCircleIcon = React.forwardRef<SVGSVGElement, FeatherStopCircleIconProps>(
	function FeatherStopCircleIcon(props, ref) {
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
				<rect x="9" y="9" width="6" height="6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherStopCircleIcon.displayName = "FeatherStopCircleIcon";
}
