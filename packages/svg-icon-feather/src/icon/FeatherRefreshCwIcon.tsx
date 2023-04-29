import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherRefreshCwIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherRefreshCwIcon = React.forwardRef<SVGSVGElement, FeatherRefreshCwIconProps>(
	function FeatherRefreshCwIcon(props, ref) {
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
				<polyline points="23 4 23 10 17 10" />
				<polyline points="1 20 1 14 7 14" />
				<path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherRefreshCwIcon.displayName = "FeatherRefreshCwIcon";
}
