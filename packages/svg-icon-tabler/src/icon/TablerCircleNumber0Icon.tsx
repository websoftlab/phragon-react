import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCircleNumber0IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCircleNumber0Icon = React.forwardRef<SVGSVGElement, TablerCircleNumber0IconProps>(
	function TablerCircleNumber0Icon(props, ref) {
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
				<path d="M10 10v4a2 2 0 1 0 4 0v-4a2 2 0 1 0 -4 0z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCircleNumber0Icon.displayName = "TablerCircleNumber0Icon";
}
