import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherFastForwardIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherFastForwardIcon = React.forwardRef<SVGSVGElement, FeatherFastForwardIconProps>(
	function FeatherFastForwardIcon(props, ref) {
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
				<polygon points="13 19 22 12 13 5 13 19" />
				<polygon points="2 19 11 12 2 5 2 19" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherFastForwardIcon.displayName = "FeatherFastForwardIcon";
}
