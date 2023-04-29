import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherAlignCenterIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherAlignCenterIcon = React.forwardRef<SVGSVGElement, FeatherAlignCenterIconProps>(
	function FeatherAlignCenterIcon(props, ref) {
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
				<line x1="18" y1="10" x2="6" y2="10" />
				<line x1="21" y1="6" x2="3" y2="6" />
				<line x1="21" y1="14" x2="3" y2="14" />
				<line x1="18" y1="18" x2="6" y2="18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherAlignCenterIcon.displayName = "FeatherAlignCenterIcon";
}
