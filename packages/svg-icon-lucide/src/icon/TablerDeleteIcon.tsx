import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDeleteIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDeleteIcon = React.forwardRef<SVGSVGElement, TablerDeleteIconProps>(function TablerDeleteIcon(
	props,
	ref
) {
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
			<path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" />
			<path d="M18 9 L12 15" />
			<path d="M12 9 L18 15" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerDeleteIcon.displayName = "TablerDeleteIcon";
}
