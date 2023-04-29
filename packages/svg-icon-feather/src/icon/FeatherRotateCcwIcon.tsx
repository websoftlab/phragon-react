import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherRotateCcwIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherRotateCcwIcon = React.forwardRef<SVGSVGElement, FeatherRotateCcwIconProps>(
	function FeatherRotateCcwIcon(props, ref) {
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
				<polyline points="1 4 1 10 7 10" />
				<path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherRotateCcwIcon.displayName = "FeatherRotateCcwIcon";
}
