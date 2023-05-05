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
				<path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerPaperclipIcon.displayName = "TablerPaperclipIcon";
}
