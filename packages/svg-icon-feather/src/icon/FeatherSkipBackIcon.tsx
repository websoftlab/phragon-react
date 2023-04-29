import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherSkipBackIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherSkipBackIcon = React.forwardRef<SVGSVGElement, FeatherSkipBackIconProps>(
	function FeatherSkipBackIcon(props, ref) {
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
				<polygon points="19 20 9 12 19 4 19 20" />
				<line x1="5" y1="19" x2="5" y2="5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherSkipBackIcon.displayName = "FeatherSkipBackIcon";
}
