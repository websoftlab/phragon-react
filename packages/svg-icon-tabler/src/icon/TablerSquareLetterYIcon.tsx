import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSquareLetterYIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSquareLetterYIcon = React.forwardRef<SVGSVGElement, TablerSquareLetterYIconProps>(
	function TablerSquareLetterYIcon(props, ref) {
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
				<path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
				<path d="M10 8l2 5l2 -5" />
				<path d="M12 16v-3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSquareLetterYIcon.displayName = "TablerSquareLetterYIcon";
}
