import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCaretLeftIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCaretLeftIcon = React.forwardRef<SVGSVGElement, TablerCaretLeftIconProps>(
	function TablerCaretLeftIcon(props, ref) {
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
				<path d="M14 6l-6 6l6 6v-12" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCaretLeftIcon.displayName = "TablerCaretLeftIcon";
}
