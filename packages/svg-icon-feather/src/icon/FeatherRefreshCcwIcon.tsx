import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherRefreshCcwIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherRefreshCcwIcon = React.forwardRef<SVGSVGElement, FeatherRefreshCcwIconProps>(
	function FeatherRefreshCcwIcon(props, ref) {
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
				<polyline points="23 20 23 14 17 14" />
				<path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherRefreshCcwIcon.displayName = "FeatherRefreshCcwIcon";
}
