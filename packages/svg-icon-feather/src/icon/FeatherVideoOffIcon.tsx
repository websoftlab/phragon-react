import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherVideoOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherVideoOffIcon = React.forwardRef<SVGSVGElement, FeatherVideoOffIconProps>(
	function FeatherVideoOffIcon(props, ref) {
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
				<path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10" />
				<line x1="1" y1="1" x2="23" y2="23" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherVideoOffIcon.displayName = "FeatherVideoOffIcon";
}
