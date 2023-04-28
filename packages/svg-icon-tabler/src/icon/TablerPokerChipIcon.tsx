import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPokerChipIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPokerChipIcon = React.forwardRef<SVGSVGElement, TablerPokerChipIconProps>(
	function TablerPokerChipIcon(props, ref) {
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
				<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
				<path d="M12 12m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
				<path d="M12 3v4" />
				<path d="M12 17v4" />
				<path d="M3 12h4" />
				<path d="M17 12h4" />
				<path d="M18.364 5.636l-2.828 2.828" />
				<path d="M8.464 15.536l-2.828 2.828" />
				<path d="M5.636 5.636l2.828 2.828" />
				<path d="M15.536 15.536l2.828 2.828" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerPokerChipIcon.displayName = "TablerPokerChipIcon";
}
