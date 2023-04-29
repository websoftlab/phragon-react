import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherActivityIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherActivityIcon = React.forwardRef<SVGSVGElement, FeatherActivityIconProps>(
	function FeatherActivityIcon(props, ref) {
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
				<polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherActivityIcon.displayName = "FeatherActivityIcon";
}
