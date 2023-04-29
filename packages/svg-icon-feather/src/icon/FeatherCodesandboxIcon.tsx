import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherCodesandboxIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherCodesandboxIcon = React.forwardRef<SVGSVGElement, FeatherCodesandboxIconProps>(
	function FeatherCodesandboxIcon(props, ref) {
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
				<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
				<polyline points="7.5 4.21 12 6.81 16.5 4.21" />
				<polyline points="7.5 19.79 7.5 14.6 3 12" />
				<polyline points="21 12 16.5 14.6 16.5 19.79" />
				<polyline points="3.27 6.96 12 12.01 20.73 6.96" />
				<line x1="12" y1="22.08" x2="12" y2="12" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherCodesandboxIcon.displayName = "FeatherCodesandboxIcon";
}
