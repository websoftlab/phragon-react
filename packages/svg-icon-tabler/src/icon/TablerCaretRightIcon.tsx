import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCaretRightIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCaretRightIcon = React.forwardRef<SVGSVGElement, TablerCaretRightIconProps>(
	function TablerCaretRightIcon(props, ref) {
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
				<path d="M10 18l6 -6l-6 -6v12" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCaretRightIcon.displayName = "TablerCaretRightIcon";
}
