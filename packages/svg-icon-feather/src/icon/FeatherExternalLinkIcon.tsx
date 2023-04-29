import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherExternalLinkIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherExternalLinkIcon = React.forwardRef<SVGSVGElement, FeatherExternalLinkIconProps>(
	function FeatherExternalLinkIcon(props, ref) {
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
				<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
				<polyline points="15 3 21 3 21 9" />
				<line x1="10" y1="14" x2="21" y2="3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherExternalLinkIcon.displayName = "FeatherExternalLinkIcon";
}
