import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherFileMinusIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherFileMinusIcon = React.forwardRef<SVGSVGElement, FeatherFileMinusIconProps>(
	function FeatherFileMinusIcon(props, ref) {
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
				<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
				<polyline points="14 2 14 8 20 8" />
				<line x1="9" y1="15" x2="15" y2="15" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherFileMinusIcon.displayName = "FeatherFileMinusIcon";
}
