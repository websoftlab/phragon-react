import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMessageChatbotIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMessageChatbotIcon = React.forwardRef<SVGSVGElement, TablerMessageChatbotIconProps>(
	function TablerMessageChatbotIcon(props, ref) {
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
				<path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
				<path d="M9.5 9h.01" />
				<path d="M14.5 9h.01" />
				<path d="M9.5 13a3.5 3.5 0 0 0 5 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMessageChatbotIcon.displayName = "TablerMessageChatbotIcon";
}
