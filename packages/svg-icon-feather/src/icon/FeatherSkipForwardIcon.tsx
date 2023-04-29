import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherSkipForwardIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherSkipForwardIcon = React.forwardRef<SVGSVGElement, FeatherSkipForwardIconProps>(
	function FeatherSkipForwardIcon(props, ref) {
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
				<polygon points="5 4 15 12 5 20 5 4" />
				<line x1="19" y1="5" x2="19" y2="19" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherSkipForwardIcon.displayName = "FeatherSkipForwardIcon";
}
