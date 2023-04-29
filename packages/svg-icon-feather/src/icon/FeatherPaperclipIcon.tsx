import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherPaperclipIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherPaperclipIcon = React.forwardRef<SVGSVGElement, FeatherPaperclipIconProps>(
	function FeatherPaperclipIcon(props, ref) {
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
				<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherPaperclipIcon.displayName = "FeatherPaperclipIcon";
}
