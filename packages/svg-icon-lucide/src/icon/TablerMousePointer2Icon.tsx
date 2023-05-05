import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMousePointer2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMousePointer2Icon = React.forwardRef<SVGSVGElement, TablerMousePointer2IconProps>(
	function TablerMousePointer2Icon(props, ref) {
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
				<path d="m4 4 7.07 17 2.51-7.39L21 11.07z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMousePointer2Icon.displayName = "TablerMousePointer2Icon";
}
