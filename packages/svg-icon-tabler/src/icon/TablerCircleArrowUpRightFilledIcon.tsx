import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCircleArrowUpRightFilledIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCircleArrowUpRightFilledIcon = React.forwardRef<
	SVGSVGElement,
	TablerCircleArrowUpRightFilledIconProps
>(function TablerCircleArrowUpRightFilledIcon(props, ref) {
	const { children, ...rest } = props;
	return (
		<SvgIcon
			fill="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...rest}
			ref={ref}
			size={24}
			icon={undefined}
			strokeWidth={0}
			stroke="none"
		>
			<path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-2 4.66h-6l-.117 .007a1 1 0 0 0 -.883 .993l.007 .117a1 1 0 0 0 .993 .883h3.584l-4.291 4.293l-.083 .094a1 1 0 0 0 1.497 1.32l4.293 -4.293v3.586l.007 .117a1 1 0 0 0 1.993 -.117v-6l-.007 -.117l-.029 -.149l-.035 -.105l-.054 -.113l-.071 -.111a1.01 1.01 0 0 0 -.097 -.112l-.09 -.08l-.096 -.067l-.098 -.052l-.11 -.044l-.112 -.03l-.126 -.017l-.075 -.003z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCircleArrowUpRightFilledIcon.displayName = "TablerCircleArrowUpRightFilledIcon";
}
