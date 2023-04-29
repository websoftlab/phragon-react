import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherXOctagonIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherXOctagonIcon = React.forwardRef<SVGSVGElement, FeatherXOctagonIconProps>(
	function FeatherXOctagonIcon(props, ref) {
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
				<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
				<line x1="15" y1="9" x2="9" y2="15" />
				<line x1="9" y1="9" x2="15" y2="15" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherXOctagonIcon.displayName = "FeatherXOctagonIcon";
}
