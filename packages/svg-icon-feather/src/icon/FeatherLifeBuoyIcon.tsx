import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherLifeBuoyIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherLifeBuoyIcon = React.forwardRef<SVGSVGElement, FeatherLifeBuoyIconProps>(
	function FeatherLifeBuoyIcon(props, ref) {
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
				<circle cx="12" cy="12" r="4" />
				<line x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
				<line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
				<line x1="14.83" y1="9.17" x2="19.07" y2="4.93" />
				<line x1="14.83" y1="9.17" x2="18.36" y2="5.64" />
				<line x1="4.93" y1="19.07" x2="9.17" y2="14.83" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherLifeBuoyIcon.displayName = "FeatherLifeBuoyIcon";
}
