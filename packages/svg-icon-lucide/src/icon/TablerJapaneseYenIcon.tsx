import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerJapaneseYenIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerJapaneseYenIcon = React.forwardRef<SVGSVGElement, TablerJapaneseYenIconProps>(
	function TablerJapaneseYenIcon(props, ref) {
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
				<path d="M12 9.5V21m0-11.5L6 3m6 6.5L18 3" />
				<path d="M6 15h12" />
				<path d="M6 11h12" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerJapaneseYenIcon.displayName = "TablerJapaneseYenIcon";
}
