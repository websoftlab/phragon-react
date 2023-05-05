import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMoveDiagonal2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMoveDiagonal2Icon = React.forwardRef<SVGSVGElement, TablerMoveDiagonal2IconProps>(
	function TablerMoveDiagonal2Icon(props, ref) {
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
				<path d="M5 11 L5 5 L11 5" />
				<path d="M19 13 L19 19 L13 19" />
				<path d="M5 5 L19 19" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMoveDiagonal2Icon.displayName = "TablerMoveDiagonal2Icon";
}
