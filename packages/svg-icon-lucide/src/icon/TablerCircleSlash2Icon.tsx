import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCircleSlash2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCircleSlash2Icon = React.forwardRef<SVGSVGElement, TablerCircleSlash2IconProps>(
	function TablerCircleSlash2Icon(props, ref) {
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
				<path d="M22 12 A10 10 0 0 1 12 22 A10 10 0 0 1 2 12 A10 10 0 0 1 22 12" />
				<path d="M22 2 2 22" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCircleSlash2Icon.displayName = "TablerCircleSlash2Icon";
}
