import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCircleNumber4IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCircleNumber4Icon = React.forwardRef<SVGSVGElement, TablerCircleNumber4IconProps>(
	function TablerCircleNumber4Icon(props, ref) {
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
				<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
				<path d="M10 8v3a1 1 0 0 0 1 1h3" />
				<path d="M14 8v8" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCircleNumber4Icon.displayName = "TablerCircleNumber4Icon";
}
