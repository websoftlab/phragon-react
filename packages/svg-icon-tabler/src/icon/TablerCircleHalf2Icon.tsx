import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCircleHalf2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCircleHalf2Icon = React.forwardRef<SVGSVGElement, TablerCircleHalf2IconProps>(
	function TablerCircleHalf2Icon(props, ref) {
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
				<path d="M12 3v18" />
				<path d="M12 14l7 -7" />
				<path d="M12 19l8.5 -8.5" />
				<path d="M12 9l4.5 -4.5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCircleHalf2Icon.displayName = "TablerCircleHalf2Icon";
}
