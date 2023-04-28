import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPaperclipIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPaperclipIcon = React.forwardRef<SVGSVGElement, TablerPaperclipIconProps>(
	function TablerPaperclipIcon(props, ref) {
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
				<path d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerPaperclipIcon.displayName = "TablerPaperclipIcon";
}
