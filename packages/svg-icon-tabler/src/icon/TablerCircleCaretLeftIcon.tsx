import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCircleCaretLeftIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCircleCaretLeftIcon = React.forwardRef<SVGSVGElement, TablerCircleCaretLeftIconProps>(
	function TablerCircleCaretLeftIcon(props, ref) {
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
				<path d="M9 12l4 -4v8z" />
				<path d="M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCircleCaretLeftIcon.displayName = "TablerCircleCaretLeftIcon";
}
